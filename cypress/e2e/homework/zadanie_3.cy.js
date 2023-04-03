
import { Login } from "../pages/loginPage";

const LoginPage = new Login();
const HomePage = new HomePage();

describe("Mój drugi test", () => {
  it("Page Object Pattern test LMS", () => {
    LoginPage.navigate();
    LoginPage.insertDataInInputs();
    LoginPage.validateTextInInputs();
    LoginPage.clickLoginButton();
    
    HomePage.clickMenu();
    HomePage.clickLogoutButton();
  });
});