import { Request , Response } from 'express';
import { MessageService } from "../services/MessageService";

class MessagesController {

    async create(request: Request, response: Response){
        const { admin_id, text, user_id } = request.body;
        const messageService = new MessageService();

        const message = await messageService.create({
            admin_id,
            text,
            user_id,
        });
    }

    async showByUser(request: Request, response: Response){
        const { id } = request.params

        const messagesService = new MessageService();

        const list = await messagesService.listByUser(id);
        return response.json(list);
    }
}

export { MessagesController }