// components/Instructions.tsx
export default function Instructions() {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-2">Instructions</h2>
      <p>
        This application allows you to send requests to a specified URL multiple
        times.
      </p>
      <p>You might want to do this for several reasons, such as:</p>
      <ul className="list-disc list-inside">
        <li>Testing the stability of an endpoint</li>
        <li>Simulating multiple login attempts</li>
        <li>Checking response times</li>
      </ul>
      <p>
        Please enter a valid URL and the number of retries (at least 1) to
        begin.
      </p>
    </div>
  );
}
