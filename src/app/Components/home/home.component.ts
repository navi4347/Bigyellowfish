import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedItem: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }
  
  navItems = [
    { text: 'Dashboard', icon: 'dashboard', component: 'TableComponent' },
    { text: 'Bar Chart', icon: 'bar_chart', component: 'BarChartComponent' },
    { text: 'Pie Chart', icon: 'pie_chart', component: 'PieChartComponent' },
    { text: 'Line Chart', icon: 'timeline', component: 'LineChartComponent' },
  ];
  
  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
  
  selectItem(item: any) {
    this.selectedItem = item.text;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
