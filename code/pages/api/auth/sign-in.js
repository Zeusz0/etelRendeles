import authService from "../../../service/AuthService"


export default async(req, res) => {
    const data = JSON.parse(req.body)

    const signedInUser = await authService.signInUser(data);

    res.json(signedInUser)
}