import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import HelloKitty from './helloKitty'
import Person from './person'
import PersonWithProps from './PersonWithProps'
import Adder from './adder'
import Numbers from './numbers'
import EvenNumbers from './evens'
import BoldEvenNumbers from './boldevens'
import Company from './company'
import Text from './text'
import _ from 'lodash'
import BigButton from './button'
import RandomNumberGenerator from './randomnumber'
import NextName from './nextname'
import BoxGrower from './boxgrower'
import NameList from './namelist'
import PersonFromObject from './personfromobject.js'

export default () => {
  return (
    <div>
      <p>Question 1 Answer</p>
      <Hello />

      <p>Question 2 Answer</p>
      <Kitty />

      <p>Question 3 Answer</p>
      <HelloKitty />

      <p>Question 4 Answer</p>
      <Person />

      <p>Question 5a Answer</p>
      <PersonWithProps name={'John'} age={20} />

      <p>Question 5b Answer</p>
      <PersonWithProps name={'Richard'} age={27} />

      <p>Question 6a Answer</p>
      <Adder number1={1} number2={2} />

      <p>Question 6b Answer</p>
      <Adder number1={7} number2={3} />

      <p>Question 7a Answer</p>
      <Numbers numbers={[1, 2, 3, 4, 5]} />

      <p>Question 7b Answer</p>
      <Numbers numbers={[1, 2, 3, 4, 5, 6, 7]} />

      <p>Question 8 Answer</p>
      <EvenNumbers numbers={[1, 2, 3, 4, 5]} />

      <p>Question 9 Answer</p>
      <BoldEvenNumbers numbers={[1, 2, 3, 4, 5]} />

      <p>Question 10 Answer</p>
      <Person person={{ name: 'John', age: 20 }} />

      <p>Question 11 Answer</p>
      <Company name={'ZDEV'} employees={[{ name: 'John', age: 20 }, { name: 'Rich', age: 27 }]} />

      <p>Question 12a Answer</p>
      <Text>Hello There!</Text>

      <p>Question 12b Answer</p>
      <Text style={{ color: 'pink' }}>Hello There!</Text>

      <p>Question 13 Answer</p>
      <button onClick={() => console.log('Hello')}>Button</button>

      <p>Question 14 Answer</p>
      <BigButton onPress={() => console.log('Hello World')}>Press me!</BigButton>

      <p>Question 15 Answer</p>
      <RandomNumberGenerator />

      <p>Question 16 Answer</p>
      <NextName names={['Richard', 'John']} />

      <p>Question 17 Answer</p>
      <BoxGrower />

      <p>Question 18 Answer</p>
      <NameList />
    </div>
  )
}
