require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Log = require('./models/log');
const mongoose = require('mongoose');
const logRoutes = require('./controllers/logs')
//include the method-override package in order to be able to DELETE
const methodOverride = require('method-override');

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

////////////////

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// Middleware;
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use('/', logRoutes)


//   // Index
// app.get('/logs', async (req, res) => {
//   try {
//     const foundlogs = await log.find({});
//     console.log(foundFruits);
//     res.status(200).render('fruits/Index', {
//       fruits: foundlogs,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // New
// app.get('/logs/new', (req, res) => {
//   console.log('New controller');
//   res.render('logs/New');
// });

// // Delete
// app.delete('/logs/:id', async (req, res) => {
//   // this is is going to actually implement the delete functionality from the database
//   try {
//     // we are getting this id from the req params (:id)
//     await Log.findByIdAndDelete(req.params.id); 
//     res.status(200).redirect('/logs');
//   } catch (err) {
//     res.status(400).send(err);
//   }

//   // we had this in originally to test that the route worked.  
//   // res.send('deleting...');
// })

// // Update  
// app.put('/logs/:id', async (req, res) => {
//   try {
//     if (req.body.shipIsBroken === 'on') {
//       req.body.shipIsBroken = true;
//     }
//     else {
//       req.body.shipIsBroken = false;
//     }
//     const updatedLog = await Log.findByIdAndUpdate(
//       // id is from the url that we got by clicking on the edit <a/> tag
//       req.params.id, 
//       // the information from the form, with the update that we made above
//       req.body, 
//       // need this to prevent a delay in the update
//       {new: true})
//       console.log(updatedLog);
//       res.redirect(`/logs/${req.params.id}`);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });


// // Create
// app.post('/logs', async (req, res) => {
//   try {
//     // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//     //   req.body.readyToEat = true; //do some data correction
//     // } else { //if not checked, req.body.readyToEat is undefined
//     //   req.body.readyToEat = false; //do some data correction
//     // }
//     req.body.readyToEat = req.body.shipIsBroken === 'on';

//     const createdLog = await Log.create(req.body);

//     res.status(201).redirect('/logs');
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Edit 
// app.get('/logs/:id/edit', async( req, res ) => {
//   try {
//     // find the document in the database that we want to update 
//     const foundLog = await Log.findById(req.params.id);
//     res.render('logs/Edit', {
//       log: foundLog //pass in the foundLog so that we can prefill the form
//     })
//   } catch (err) {
//     res.status(400).send(err);
//   }
// })


// // Show
// app.get('/logs/:id', async (req, res) => {
//   try {
//     const foundLog = await Log.findById(req.params.id);

//     //second param of the render method must be an object
//     res.render('logs/Show', {
//       //there will be a variable available inside the jsx file called log, its value is logs[req.params.indexOfLogsArray]
//       log: foundLog,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});