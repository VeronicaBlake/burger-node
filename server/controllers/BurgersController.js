import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgerService";

export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers"); //REVIEW Why do we rename this? What goes in the parens again> 
        this.router
            .get("", this.getAll) //REVIEW ("what's going to be appended to the baseURL in super", this.the function on this page that goes with the .get/post/put request)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete);
    }
    //REVIEW why is there an underscore here? Is the req only if it's applying to a specific knight's item? (like req.id-> get one id?)
    async getAll(_, res, next) { //REVIEW where will getAll be called? 
        try {
            const burgers = burgersService.find()
            return res.send(burgers);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            //REVIEW Is it ok to name this just burger? will that mess me up later?
            const burger = burgersService.findById(req.params.id)
            return res.send(burger);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await burgersService.delete(req.params.id)
            res.send("<h1>It's been deleted.</h1>")
        } catch (error) {
            next(error)
        }
    }
}