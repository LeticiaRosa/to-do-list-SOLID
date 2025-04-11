import { InvalidEvent } from "react";

export function InputTask() {
  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
    return (
      <input
      id="input"
      type="text"
      placeholder="Adicione uma nova tarefa"
      required
      onInvalid={handleNewCommentInvalid}
    />
    )
}