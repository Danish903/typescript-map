import { Request, Response, NextFunction } from 'express';
import { get, controller, use, post, bodyValidator } from "./decorators/index"
import { RequestWithBody } from '../routes/loginRoutes';


@controller("/auth")
export class LoginController {

  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password"/>
      </div>
      <button> submit</button>
    </form>
  
    `)
  }
  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: RequestWithBody, res: Response): void {
    const { email, password } = req.body
    if (email && password && email === "bob@gmail.com" && password === "password") {

      req.session = { loggedIn: true }
      res.redirect("/");
    } else {
      res.send("Invalid email or password")
    }
  };
}