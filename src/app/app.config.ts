import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DASHBOARD_ROUTES } from './modules/dashboard/dashboard.routes';
import { LESSONS_ROUTES } from './modules/lessons/lessons.routes';
import { COURSE_ROUTES } from './modules/courses/courses.routes';
import { SANDBOX_ROUTES } from './modules/sandbox/sandbox.routes';
import { AUTH_ROUTES } from './modules/auth/auth.routes';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const appConfig = {
  providers: [
    provideRouter([
      ...AUTH_ROUTES,
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            children: DASHBOARD_ROUTES,
          },
          {
            path: 'lessons',
            children: LESSONS_ROUTES,
          },
          {
            path: 'courses',
            children: COURSE_ROUTES,
          },
          {
            path: 'sandbox',
            children: SANDBOX_ROUTES,
          }
        ]
      }
    ]),
    provideHttpClient(withInterceptors([])),
  ],
};
