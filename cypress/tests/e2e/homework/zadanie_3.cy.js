
import { Login } from "../../../pages/loginPage";
import { Home } from "../../../pages/homePage";

const LoginPage = new LoginPage();
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