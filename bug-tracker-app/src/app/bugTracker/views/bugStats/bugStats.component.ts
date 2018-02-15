import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../../models/Bug';

@Component({
	selector : 'app-bug-stats',
	templateUrl : 'bugStats.component.html',
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

	@Input('data')
	bugs : Bug[] = [];

}