/*
**  Author: Elias Sundby Aukan
*/

import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
    <div id=login>
      <form>
        <p>Brukernavn</p>
        <input type="text"><br>
        <p>Passord:</p>
        <input type="password"> <br>
        <input type="submit" value="Logg inn">
      </form>
    </div>
      `
})
export class LoginComponent{

}
