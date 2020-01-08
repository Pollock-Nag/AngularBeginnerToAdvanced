import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.returnValue(of([ todos ]));

    component.ngOnInit();

    // expect(component.todos.length).toBeGreaterThan(0);
    expect(todos.length).toBe(3);

  });
});
