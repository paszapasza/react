import * as React from 'react';
import { shallow } from 'enzyme';
import { App, ShowItems } from '../App'

it('renders without crashing', () => {
    shallow(<App />);
});

// //czy app zawiera input
// it('include input', () => {
//     const app = shallow(<App />);
//     expect(app.containsMatchingElement(<input />)).toEqual(true)
// });

// //czy app zawiera w sobie komponnet UserList
// it('includes UserList', () => {
//     const app = shallow(<App />);
//     expect(app.containsMatchingElement(<ShowItems />)).toEqual(true);
// })

// it('show message when there are no users', () => {
//     const showItems = shallow(<ShowItems items={[]} />);
//     expect(showItems.text()).toContain('No results!');
// })

// it('doesn;t show message when there are users',() => {
//     const showItems = shallow(<ShowItems items={['michal']} />);
//     expect(showItems.text()).not.toContain('No results!');
// })

// it('imput users = display users', () => {
//     const users = ['michal', 'zenek'];
//     const showItems = shallow(<ShowItems items={users} />);
//     expect(showItems.find('li').length).toEqual(users.length)
// })

// describe('list of users', () => {
//     const users = ['michal', 'zenek'];
//     const showItems = shallow(<ShowItems items={users} />);

//     users.forEach(user => {
//         it(`include name ${user} on the list`, () => {
//             expect(showItems.containsMatchingElement(<li>{user}</li>));
//         });
//     });
// });


// it('passes all users to the showItem', () => {
//     const app = shallow(<App />);
//     expect(app.find('ShowItems').prop('items')).toEqual(['tomek', 'albert', 'zenon', 'bartek', 'hieronim']);
// })

//zzz
describe('change props', () => {
    const users = ['jan', 'maria'];
    const showItems = shallow(<ShowItems items={users} />);
    
    
    users.forEach(user => {
        console.log(user)
        it(`includes name ${user} on the list`, () => {
            expect((showItems).find('li').length,2)
        });
    });
});



// it('filters names on input', () => {

//     const x = ['tomek', 'albert', 'zenon', 'bartek', 'hieronim'];
//     const app = shallow(<App />);
//     expect(app.find(ShowItems).prop('items')).toEqual(x);

//     app.find('input').simulate('input', {target: {value: 'z'}})
//     expect(app.find(ShowItems).prop('items')).toEqual(['zenon'])
// })





// jak debugować w tym dziwactwie i czemu "change props nie działa"