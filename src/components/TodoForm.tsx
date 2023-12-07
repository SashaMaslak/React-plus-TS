import React, { /*useState*/ useRef } from "react"

interface TodoFromProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFromProps> = props => {
  //const [title, setTitle] = useState<string>("")
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const ref = useRef<HTMLInputElement>(null)

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value)
      ref.current!.value = ""
      // console.log(title)
      // setTitle("")
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        onKeyUp={keyUpHandler}
        type="text"
        id="title"
        placeholder="Input title name"
      />
      <label htmlFor="title" className="active">
        Input title name
      </label>
    </div>
  )
}

export default TodoForm
