import {Router, Request, Response } from 'express';

const router = Router();

router.get('/index', (request:Request, response:Response) => {
    response.json({
        ok: true,
        mensaje: 'Todo ok'
    });
});

export default router;