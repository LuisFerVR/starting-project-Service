import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type  TaskStatusOptions = {
  value: 'open'|'in-progress'|'done',
  status: TaskStatus,
  text: string
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('TASK_STATUS_OPTIONS');

export const TaskStatusOptions : TaskStatusOptions = [
  {value:'open',
  status: 'OPEN',
  text:'Open'},

  {value:'in-progress',
  status: 'IN_PROGRESS',
  text:'In-Progress'},

  {value:'done',
  status: 'DONE',
  text:'Completed'}
]

export const TaskStatusOptionsProvider : Provider = {provide: TASK_STATUS_OPTIONS, useValue:TaskStatusOptions};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
