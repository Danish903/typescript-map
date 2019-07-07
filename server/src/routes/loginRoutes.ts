import { Router, Request, Response } from 'express';
import { NextFunction } from 'connect';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send("Not permitted ");


}
const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    console.log("here")
    res.send(`
     <div>
      <div>You are logged in </div>
      <a href="/logout">Logout</a>
     </div>
  `)
  } else {
    res.send(`
    <div>
     <div>You are not logged in </div>
     <a href="/login">Login</a>
    </div>
 `)
  }

})

router.get("/login", (req: Request, res: Response) => {
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
})

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body
  if (email && password && email === "bob@gmail.com" && password === "password") {

    req.session = { loggedIn: true }
    res.redirect("/");


  } else {
    res.send("Invalid email or password")
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/")
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to the protected route, logged in user ")
})
export { router }