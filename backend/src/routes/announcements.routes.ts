import { Router } from "express";
import createAnnouncementController from "../controllers/announcements/createAnnouncement.controller";
import deleteAnnouncementController from "../controllers/announcements/deleteAnnouncement.controller";
import listAllAnnouncementsController from "../controllers/announcements/listAllAnnouncements.controller";
import retrieveAnnouncementController from "../controllers/announcements/retrieveAnnouncement.controller";
import updateAnnoucementController from "../controllers/announcements/updateAnnouncement.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post("", ensureAuthMiddleware, createAnnouncementController);
announcementsRoutes.get("", listAllAnnouncementsController);
announcementsRoutes.get("/:id", ensureAuthMiddleware, retrieveAnnouncementController);
announcementsRoutes.patch("/:id", ensureAuthMiddleware, updateAnnoucementController);
announcementsRoutes.delete("/:id", ensureAuthMiddleware, deleteAnnouncementController);

export default announcementsRoutes;
