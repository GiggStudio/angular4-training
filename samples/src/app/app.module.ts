import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponentComponent } from './02-basics/hello-world-component/hello-world-component.component';
import { SimpleComponent2Component } from './02-basics/simple-component-2/simple-component-2.component';
import { DirectivesDemoComponent } from './02-basics/directives-demo/directives-demo.component';
import { Demo0301Component } from './03-components-and-databinding/01-custom-properties-and-events/demo-03-01/demo-03-01.component';
import { PersonBadgeComponent } from './03-components-and-databinding/01-custom-properties-and-events/person-badge/person-badge.component';
import { Demo0302Component } from './03-components-and-databinding/02-accessing-dom/demo-03-02/demo-03-02.component';
import { Demo0303Component } from './03-components-and-databinding/03-lifecycle/demo-03-03/demo-03-03.component';
import { PanelComponent } from './03-components-and-databinding/03-lifecycle/panel/panel.component';
import { Demo030302Component } from './03-components-and-databinding/03-lifecycle/demo-03-03-02/demo-03-03-02.component';
import { WarningPanelComponent } from './03-components-and-databinding/03-lifecycle/warning-panel/warning-panel.component';
import { Demo0101Component } from './01-typescript-basics/demo-01-01/demo-01-01.component';
import { Demo0102Component } from './01-typescript-basics/demo-01-02/demo-01-02.component';
import { Demo0103Component } from './01-typescript-basics/demo-01-03/demo-01-03.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloWorldComponentComponent,
        SimpleComponent2Component,
        DirectivesDemoComponent,
        Demo0301Component,
        PersonBadgeComponent,
        Demo0302Component,
        Demo0303Component,
        PanelComponent,
        Demo030302Component,
        WarningPanelComponent,
        Demo0101Component,
        Demo0102Component,
        Demo0103Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
