import {Component} from '@angular/core';
import {Platform, ionicBootstrap,MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {EcommerceHomePage} from './pages/ecommerce-home/ecommerce-home';
import {HellopagePage} from './pages/hellopage/hellopage';

@Component({
  templateUrl: './build/app.html'
})
export class MyApp {

  private rootPage:any;
  private tabspage:any;
  private hellopage:any;

  constructor(private platform:Platform, public menu:MenuController) {
    this.rootPage = EcommerceHomePage;
    this.tabspage = TabsPage;
    this.hellopage = HellopagePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page){
    if(page=='home') {
      this.rootPage=TabsPage;
      this.menu.close();
    }
    if(page=='tabs') {
      this.rootPage=HellopagePage;
      this.menu.close();
    }
    if(page == 'page') {
      this.rootPage=EcommerceHomePage;
      this.menu.close();
    }
  }
}

ionicBootstrap(MyApp)
