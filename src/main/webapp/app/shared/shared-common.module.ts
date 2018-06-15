import { NgModule } from '@angular/core';

import { JhgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhgatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhgatewaySharedCommonModule {}
