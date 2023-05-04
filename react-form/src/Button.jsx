export default function Button({onClick, disabled}) {
  
    return ( 
        <div>
    <button onClick={onClick} disabled={disabled}>
        Submit
    </button>
    
    </div>
    )
}