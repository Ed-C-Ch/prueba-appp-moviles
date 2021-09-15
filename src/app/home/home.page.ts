import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
  data: any;
  
  constructor(private activeRoute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }
    })
  }

  animar(){
      this.animationCtrl.create()
      .addElement(document.querySelector("#icon"))
      .duration(2000)
      .fromTo('color', 'black', 'red')
      .play()   
  }

  animar2(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon2"))
    .duration(2000)
    .fromTo('color', 'black', 'orange')
    .play()   
  }

  animar3(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon3"))
    .duration(2000)
    .fromTo('color', 'black', 'green')
    .play()   
  }

  animar4(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon4"))
    .duration(2000)
    .fromTo('color', 'black', 'purple')
    .play()   
  }

  animar5(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon5"))
    .duration(2000)
    .fromTo('color', 'black', 'pink')
    .play()   
  }

  animar6(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon6"))
    .duration(2000)
    .fromTo('color', 'black', 'red')
    .play()   
  }

  animar7(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon7"))
    .duration(2000)
    .fromTo('color', 'black', 'orange')
    .play()   
  }

  animar8(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon8"))
    .duration(2000)
    .fromTo('color', 'black', 'green')
    .play()   
  }

  animar9(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon9"))
    .duration(2000)
    .fromTo('color', 'black', 'purple')
    .play()   
  }

  animar10(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon10"))
    .duration(2000)
    .fromTo('color', 'black', 'pink')
    .play()   
  }

  animar11(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon11"))
    .duration(2000)
    .fromTo('color', 'black', 'orange')
    .play()   
  }

  animar12(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon12"))
    .duration(2000)
    .fromTo('color', 'black', 'green')
    .play()   
  }

  animar13(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon13"))
    .duration(2000)
    .fromTo('color', 'black', 'brown')
    .play()   
  }

  animar14(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon14"))
    .duration(2000)
    .fromTo('color', 'black', 'gray')
    .play()   
  }

  animar15(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon15"))
    .duration(2000)
    .fromTo('color', 'black', 'gold')
    .play()   
  }

  animar16(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon16"))
    .duration(2000)
    .fromTo('color', 'black', 'emerald')
    .play()   
  }

  animar17(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon17"))
    .duration(2000)
    .fromTo('color', 'black', 'Magenta')
    .play()   
  }

  animar18(){
    this.animationCtrl.create()
    .addElement(document.querySelector("#icon18"))
    .duration(2000)
    .fromTo('color', 'black', 'green')
    .play()   
  }
}
