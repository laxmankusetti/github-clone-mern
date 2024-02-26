import express from 'express';
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js';


const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepos)
router.post('/like/:username', ensureAuthenticated, likeProfile)
router.get('/likes', ensureAuthenticated, getLikes)

export default router;