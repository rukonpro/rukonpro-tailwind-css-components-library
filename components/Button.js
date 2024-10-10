export default function Button({ children, type = 'button', className = '', ...props }) {
    return (
      <button
        type={type}
        className={`px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  