import express from "express";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import adminController from "../controller/admin-controller";
import { upload } from "../middleware/multer-middleware.js";

export const adminRoutes = new express.Router();

adminRoutes.use(adminMiddleware);

// Admin Routes
// adminRoutes.post("/api/admin", adminController.create);
adminRoutes.get("/api/admin", adminController.getAllAdmin);
adminRoutes.get("/api/admin/detail/:username", adminController.getByUsername);
adminRoutes.get("/api/admin/current", adminController.get);
adminRoutes.patch("/api/admin/current", upload.single("photo"), adminController.update);
adminRoutes.put("/api/admin/:username", adminController.updateAdmin);
adminRoutes.delete("/api/admin/current", adminController.logout);
adminRoutes.delete("/api/admin/:username", adminController.destroy);
