export default function Input() {
  return (
    <div className="w-full">
        <p>User ID</p>
        <div className="h-12 w-full border rounded-xl border-gray-600">
            <input type="text" className="h-full w-full pl-3 rounded-xl bg-transparent" placeholder="User ID"/>
        </div>
    </div>
  )
}
