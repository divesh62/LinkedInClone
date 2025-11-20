import Router from "express";
import {register,
        login,
        uploadProfilePicture,
        updateUserProfile,
        getUserAndProfile,
        updateProfileData,
        downloadProfile,
        sendConnectionRequest,
        getMyConnectionsRequest,
        whatAreMyConnections,
        acceptConnectionRequest,
        getAllUserProfile,
        getUserProfileAndUserBasedOnUsername}
       
    from "../controllers/user.controller.js"
import multer from "multer";
import fs from "fs";


if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage });



router.route("/update_profile_picture")
.post(upload.single('profilePicture'), uploadProfilePicture);
router.route("/register").post(register)
router.route("/login").post(login)
router.route('/user_update').post(updateUserProfile)
router.route("/get_user_and_profile").get(getUserAndProfile);
router.route("/update_profile_data").post(updateProfileData);
router.route("/user/get_all_users").get(getAllUserProfile)
router.route("/user/download_resume").get(downloadProfile);
router.route("/get_all_profile_data").get(getUserAndProfile);
router.route("/user/get_profile_based_on_username").get(getUserProfileAndUserBasedOnUsername);
// Connections Request Routes

router.route("/user/send_connection_request").post(sendConnectionRequest);
router.route("/user/get_connection_request").get(getMyConnectionsRequest);
router.route("/user/user_connection_request").get(whatAreMyConnections);
router.route("/user/accept_connection_request").post(acceptConnectionRequest);

// Post Connection Routes



export default router;