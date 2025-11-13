export function Footer() {
  return (
    // The footer element at the bottom of the page
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      {/* 
        Tailwind & DaisyUI classes used here:
        - footer: applies base footer styles
        - sm:footer-horizontal: makes the footer layout horizontal on small+ screens
        - footer-center: centers footer content
        - bg-base-300: sets a light background color
        - text-base-content: applies default readable text color
        - p-4: adds padding around the footer
      */}

      <aside>
        {/* Footer text section */}
        <p>
          {/* Dynamically insert the current year using JavaScript */}
          Copyright © {new Date().getFullYear()} - All right reserved by
          ForkLore Ltd
        </p>
      </aside>
    </footer>
  );
}
