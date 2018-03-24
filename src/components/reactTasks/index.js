import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import HelloKitty from './helloKitty'
import Person from './person'
import PersonWithProps from './PersonWithProps'
import Adder from './adder'
import Numbers from './numbers'

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
      <Person name={'John'} age={20} />

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

    </div>
  )
}
