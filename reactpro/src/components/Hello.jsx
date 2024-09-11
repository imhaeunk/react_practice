function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.name} {person.emoji}
      </h1>
    </div>
  )
}

export default Hello
