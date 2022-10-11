import Form from "react-bootstrap/Form";
import useInput from "../services/Address";
// import { useState } from "react";

export default function AddressField({handleChange, propertyData}) {
  const address = useInput("")

  return (
    <Form.Group className="mb-3">
      <Form.Label column="lg" lg={2}>
        Street Address
      </Form.Label>
      <Form.Control
        size="lg"
        type="text"
        name='address'
        placeholder="Street Address"
        value={propertyData.address}
        onChange={handleChange}
      ></Form.Control>
      {address.suggestions?.length > 0 && (
        <div>{address.suggestions.map((suggestion, index) => {
            return <p key={index} onClick={() => {
                address.setValue(suggestion.place_name)
                address.setSuggestions([])
            }}>{suggestion.place_name}</p>
        })}</div>
      )}
    </Form.Group>
  );
}
