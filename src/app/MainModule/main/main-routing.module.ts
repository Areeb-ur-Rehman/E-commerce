import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: '', component: MainComponent ,children:
[{path:'Home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'Products',component:ProductsComponent},
{path:'AboutUs',component:AboutUsComponent},
{path:'Contactus',component:ContactUsComponent},
{path:'signin',component:SignInComponent}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
