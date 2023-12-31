export default function Input({label,textArea,...props})
{
    return <p>
        <label>{label}</label>
        {textArea ? <textArea {...props}/> :<input props/>}
    </p>
}