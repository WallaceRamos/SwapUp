const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const multer = require('multer');
const uploadConfig = require('./config/multer');


const UserController = require('./controllers/UserController');
const AuthenticationController = require('./controllers/AuthenticationController');
const ServiceController = require('./controllers/ServiceController');
const SwappingController = require('./controllers/SwappingController');
const SolicitationController = require('./controllers/SolicitationController');
const NotificationController = require('./controllers/NotificationController');
const ApprovalController  = require('./controllers/ApprovalController');

//const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

// User
routes.post('/users', upload.single('userImage'), UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);

routes.put('/users/:userId', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().required(),
  })
}), upload.single('userImage'), UserController.update);

routes.delete('/users/:userId', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().required(),
  })
}), UserController.destroy);

// Authentication
routes.post('/authentications', AuthenticationController.store);

// Service
routes.get('/services', ServiceController.List);
routes.get('/services/:serviceId', ServiceController.ListDetail);
routes.post('/:userId/services', upload.single('serviceImage'), ServiceController.store);
routes.get('/:userId/services', ServiceController.index);
routes.get('/:userId/services/:serviceId', ServiceController.show);
routes.put('/:userId/services/:serviceId', upload.single('serviceImage'), ServiceController.update);
routes.delete('/:userId/services/:serviceId', ServiceController.destroy);


// Swapping
routes.post('/:userId/services/:serviceId/swappings', SwappingController.store);
routes.get('/:userId/swappings', SwappingController.index);
routes.get('/:userId/swappings/:swappingId', SwappingController.show);
routes.delete('/:userId/swappings/:swappingId', SwappingController.destroy);


//Solicitation
routes.post('/:userId/services/:serviceId/solicitations', SolicitationController.store);
routes.get('/:userId/solicitations', SolicitationController.index);
routes.get('/:userId/solicitations/:solicitationId', SolicitationController.show);
routes.delete('/:userId/solicitations/:solicitationId', SolicitationController.destroy);


// Notification
routes.post('/:userId/notifications/:serviceId/:userRegisterId', NotificationController.store);
routes.get('/notifications/:userId', NotificationController.index);
routes.get('/:userId/notifications/:notificationId', NotificationController.show);
routes.delete('/:userId/notifications/:notificationId', NotificationController.destroy);


routes.post('/swappings/:swappingId/approvals',ApprovalController.store )

//routes.post('/notificationsServices/:notificationId/rejections',RejectionController.store )


module.exports = routes;
