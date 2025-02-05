To fix this, instead of fetching data directly within the layout, fetch it in the nested page and pass it as a prop to the layout. This ensures that the data always updates when the route parameter changes.  Alternatively, you can use a library like SWR or React Query to handle data fetching and caching more effectively.  Here's a revised example:

```javascript
// app/layout.js
import './globals.css'

function RootLayout({ children, data }) {
  return (
    <html lang="en">
      <body>
        {data && <p>Data from page: {data}</p>}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

// app/page.js
import { RootLayout } from './layout'

async function Page() {
    const res = await fetch(`/api/data`) // Fetch data based on the parameter if needed
    const data = await res.json()
    return (
        <RootLayout data={data}>
            <p>Page Content</p>
        </RootLayout>
    );
}
export default Page;
```