import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DatabasecmpComponent } from './app/databasecmp/databasecmp.component';
import { UitoolsComponent } from './app/uitools/uitools.component';

// Component will load based on conditions, you can do it dynamically
const useDatabaseCmp = false;

const rootComponent = useDatabaseCmp ? DatabasecmpComponent : UitoolsComponent;


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
