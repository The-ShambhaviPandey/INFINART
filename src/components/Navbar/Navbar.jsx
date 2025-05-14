import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const DROPDOWNS = [
  
    {
      label: 'Products',
      path: '/products',
      columns: [
        {
          heading: { label: 'Makeup', path: '/products/makeup' },
          items: [
            { label: 'Lipstick', path: '/products/lipstick' },
            { label: 'Lip Gloss', path: '/products/lip-gloss' },
            { label: 'Lip Liner', path: '/products/lip-liner' },
          ],
        },
        {
          heading: { label: 'Skincare', path: '/products/skincare' },
          items: [
            { label: 'Face Wash', path: '/products/face-wash' },
            { label: 'Serum', path: '/products/serum' },
            { label: 'Sunscreen', path: '/products/sunscreen' },
          ],
        },
        {
          heading: { label: 'Hair', path: '/products/hair' },
          items: [
            { label: 'Shampoo', path: '/products/shampoo' },
            { label: 'Conditioner', path: '/products/conditioner' },
            { label: 'Hair Oil', path: '/products/hair-oil' },
          ],
        },
      ],
    },
    {
      label: 'Shops',
      path: '/shops',
      columns: [
        {
          heading: { label: 'Makeup', path: '/products/makeup' },
          items: [
            { label: 'Lipstick', path: '/products/lipstick' },
            { label: 'Lip Gloss', path: '/products/lip-gloss' },
            { label: 'Lip Liner', path: '/products/lip-liner' },
          ],
        },
        {
          heading: { label: 'Skincare', path: '/products/skincare' },
          items: [
            { label: 'Face Wash', path: '/products/face-wash' },
            { label: 'Serum', path: '/products/serum' },
            { label: 'Sunscreen', path: '/products/sunscreen' },
          ],
        },
        {
          heading: { label: 'Hair', path: '/products/hair' },
          items: [
            { label: 'Shampoo', path: '/products/shampoo' },
            { label: 'Conditioner', path: '/products/conditioner' },
            { label: 'Hair Oil', path: '/products/hair-oil' },
          ],
        },
      ],
    },
    {
      label: 'Blog',
      path: '/blog',
      columns: [
        {
          heading: { label: 'Makeup', path: '/products/makeup' },
          items: [
            { label: 'Lipstick', path: '/products/lipstick' },
            { label: 'Lip Gloss', path: '/products/lip-gloss' },
            { label: 'Lip Liner', path: '/products/lip-liner' },
          ],
        },
        {
          heading: { label: 'Skincare', path: '/products/skincare' },
          items: [
            { label: 'Face Wash', path: '/products/face-wash' },
            { label: 'Serum', path: '/products/serum' },
            { label: 'Sunscreen', path: '/products/sunscreen' },
          ],
        },
        {
          heading: { label: 'Hair', path: '/products/hair' },
          items: [
            { label: 'Mask', path: '/products/shampoo' },
            { label: 'Conditioner', path: '/products/conditioner' },
            { label: 'Hair Oil', path: '/products/hair-oil' },
          ],
        },
      ],
    },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Infinart</Link>
      </div>
      <div className="navbar-nav-container">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {DROPDOWNS.map((dropdown) => (
            <li className="dropdown" key={dropdown.label}>
              <Link to={dropdown.path} className="dropdown-trigger">
                {dropdown.label}
              </Link>
              <div className="dropdown-menu mega-menu">
                {dropdown.columns.map((col, idx) => (
                  <div className="mega-column" key={idx}>
                    <h4>
                      <Link to={col.heading.path}>{col.heading.label}</Link>
                    </h4>
                    <ul>
                      {col.items.map((item) => (
                        <li key={item.path}>
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <Link to="/login" className="login_button">
        Sign in
      </Link>
    </nav>
  );
};

export default Navbar;