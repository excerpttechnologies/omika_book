"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  ShoppingCart,
  Search,
  User,
  LogOut,
  Menu,
  X,
  BookOpen,
  Home,
  Phone,
  Info,
  FileText,
} from "lucide-react";

import Login from "../Login/login";

interface CartItem {
  _id: string;
  bookName: string;
  authorName: string;
  salePrice: number;
  mrpPrice: number;
  image1: string;
  quantity: number;
}

export default function Header() {
  const pathname = usePathname();

  const [openLogin, setOpenLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Inline CSS as objects
  const styles = {
    header: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 15px rgba(0, 0, 0, 0.08)",
      position: "sticky" as const,
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid #eaeaea",
    },
    headerContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "72px",
    },
    mobileMenuBtn: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "6px",
      color: "#333",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      color: "#333",
    },
    logoImage: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      objectFit: "cover" as const,
    },
    logoText: {
      fontSize: "24px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #99bbcf 0%, #7aa6c2 100%)",
      WebkitBackgroundClip: "text" as const,
      WebkitTextFillColor: "transparent" as const,
      letterSpacing: "-0.5px",
    },
    desktopNav: {
      display: "flex",
      gap: "32px",
      alignItems: "center",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      textDecoration: "none",
      color: "#555",
      fontSize: "15px",
      fontWeight: 500,
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      position: "relative" as const,
    },
    activeNavLink: {
      color: "#99bbcf",
      backgroundColor: "rgba(153, 187, 207, 0.1)",
    },
    navIcon: {
      display: "flex",
      alignItems: "center",
    },
    rightIcons: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
    },
    cartIcon: {
      position: "relative" as const,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#333",
      padding: "8px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    cartCount: {
      position: "absolute" as const,
      top: "-4px",
      right: "-4px",
      backgroundColor: "#99bbcf",
      color: "white",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius: "50%",
      minWidth: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 4px",
    },
    searchBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#333",
      padding: "8px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    loginBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "linear-gradient(135deg, #99bbcf 0%, #7aa6c2 100%)",
      border: "none",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(153, 187, 207, 0.3)",
    },
    userDropdown: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    userName: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      color: "#333",
      fontSize: "14px",
      fontWeight: 500,
      padding: "8px 16px",
      borderRadius: "8px",
      backgroundColor: "rgba(153, 187, 207, 0.1)",
      transition: "all 0.3s ease",
    },
    logoutBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#666",
      padding: "8px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    mobileNavOverlay: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "flex-end",
    },
    mobileNav: {
      width: "300px",
      backgroundColor: "white",
      height: "100%",
      boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column" as const,
    },
    mobileNavHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid #eee",
    },
    mobileCloseBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#333",
      padding: "4px",
      borderRadius: "6px",
    },
    mobileNavMenu: {
      flex: 1,
      padding: "20px 0",
      display: "flex",
      flexDirection: "column" as const,
      gap: "4px",
      overflowY: "auto" as const,
    },
    mobileNavLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      color: "#555",
      fontSize: "16px",
      fontWeight: 500,
      padding: "16px 24px",
      transition: "all 0.3s ease",
    },
    activeMobileNavLink: {
      color: "#99bbcf",
      backgroundColor: "rgba(153, 187, 207, 0.1)",
      borderRight: "3px solid #99bbcf",
    },
    mobileNavIcon: {
      display: "flex",
      alignItems: "center",
      width: "24px",
    },
    mobileCartLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      fontWeight: 500,
      padding: "16px 24px",
      marginTop: "16px",
      borderTop: "1px solid #eee",
      transition: "all 0.3s ease",
    },
    mobileAuthSection: {
      marginTop: "auto",
      padding: "20px 24px",
      borderTop: "1px solid #eee",
    },
    mobileLoginBtn: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      background: "linear-gradient(135deg, #99bbcf 0%, #7aa6c2 100%)",
      border: "none",
      color: "white",
      padding: "16px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: 600,
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
    mobileUserInfo: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
    },
    mobileUserGreeting: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#333",
      fontSize: "16px",
      fontWeight: 500,
      padding: "12px 16px",
      backgroundColor: "rgba(153, 187, 207, 0.1)",
      borderRadius: "8px",
    },
    mobileLogoutBtn: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      background: "none",
      border: "1px solid #eee",
      color: "#666",
      padding: "14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: 500,
      justifyContent: "center",
      transition: "all 0.3s ease",
    },
    hoverEffects: {
      navLinkHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
        color: "#99bbcf",
        transform: "translateY(-1px)",
      },
      cartIconHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
        color: "#99bbcf",
      },
      searchBtnHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
        color: "#99bbcf",
      },
      loginBtnHover: {
        transform: "translateY(-2px)",
        boxShadow: "0 6px 20px rgba(153, 187, 207, 0.4)",
      },
      userNameHover: {
        backgroundColor: "rgba(153, 187, 207, 0.2)",
      },
      logoutBtnHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
        color: "#99bbcf",
      },
      mobileNavLinkHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
      },
      mobileLoginBtnHover: {
        transform: "translateY(-2px)",
        boxShadow: "0 6px 20px rgba(153, 187, 207, 0.4)",
      },
      mobileLogoutBtnHover: {
        backgroundColor: "rgba(153, 187, 207, 0.1)",
        color: "#99bbcf",
      },
    },
  };

  // LOAD LOGIN DATA ON PAGE LOAD
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const name = localStorage.getItem("userName");

    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "");
    }

    loadCartItems();
  }, []);

  // LOAD CART ITEMS
  const loadCartItems = () => {
    try {
      const savedCart = localStorage.getItem("bookCart");
      if (savedCart) {
        const items = JSON.parse(savedCart);
        setCartItems(items);
        updateCartCount(items);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  // UPDATE CART COUNT
  const updateCartCount = (items: CartItem[]) => {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  };

  // LISTEN FOR CART UPDATES
  useEffect(() => {
    const handleStorageChange = () => {
      loadCartItems();
    };

    // Listen for storage events (from other tabs/windows)
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom cart update events
    window.addEventListener('cartUpdated', handleStorageChange);

    // Poll for changes (fallback)
    const interval = setInterval(loadCartItems, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    setIsLoggedIn(false);
    setUserName("");
    window.location.reload();
  };

  // NAV ITEMS WITH ICONS
  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "Books", path: "/books", icon: <BookOpen size={18} /> },
    { label: "Blogs", path: "/blogs", icon: <FileText size={18} /> }, 
    { label: "About", path: "/about", icon: <Info size={18} /> },
    { label: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  const handleLoginSuccess = () => {
    setOpenLogin(false);
    // Reload user data after successful login
    const token = localStorage.getItem("authToken");
    const name = localStorage.getItem("userName");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "");
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          {/* MOBILE MENU BUTTON */}
          <button
            style={styles.mobileMenuBtn}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>

          {/* LOGO */}
          <div style={styles.logo}>
            <Link href="/" style={styles.logoLink}>
              <Image
                src="/assets/images/booklogo.webp"
                alt="BookStore Logo"
                width={40}
                height={40}
                style={styles.logoImage}
                priority
              />
              <span style={styles.logoText} className="logo-text">BookStore</span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav style={styles.desktopNav} className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  ...styles.navLink,
                  ...(pathname === item.path ? styles.activeNavLink : {}),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = styles.hoverEffects.navLinkHover.backgroundColor;
                  e.currentTarget.style.color = styles.hoverEffects.navLinkHover.color;
                  e.currentTarget.style.transform = styles.hoverEffects.navLinkHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = pathname === item.path 
                    ? styles.activeNavLink.backgroundColor 
                    : "transparent";
                  e.currentTarget.style.color = pathname === item.path 
                    ? styles.activeNavLink.color 
                    : styles.navLink.color;
                  e.currentTarget.style.transform = "none";
                }}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div style={styles.rightIcons} className="right-icons">
            {/* CART ICON WITH COUNT */}
            <Link 
              href="/cart" 
              style={styles.cartIcon}
              className="cart-icon"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.hoverEffects.cartIconHover.backgroundColor;
                e.currentTarget.style.color = styles.hoverEffects.cartIconHover.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = styles.cartIcon.color;
              }}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span style={styles.cartCount}>{cartCount > 99 ? '99+' : cartCount}</span>
              )}
            </Link>

            {/* SEARCH BUTTON */}
            <button 
              style={styles.searchBtn}
              className="search-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.hoverEffects.searchBtnHover.backgroundColor;
                e.currentTarget.style.color = styles.hoverEffects.searchBtnHover.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = styles.searchBtn.color;
              }}
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            {/* USER AUTH SECTION */}
            {!isLoggedIn ? (
              <button 
                style={styles.loginBtn}
                className="login-btn"
                onClick={() => setOpenLogin(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.hoverEffects.loginBtnHover.transform;
                  e.currentTarget.style.boxShadow = styles.hoverEffects.loginBtnHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = styles.loginBtn.boxShadow;
                }}
                aria-label="Login"
              >
                <User size={22} />
                <span className="login-text">Login</span>
              </button>     
            ) : (
              <div style={styles.userDropdown} className="user-dropdown">
                <Link 
                  href="/profile" 
                  style={styles.userName}
                  className="user-name"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = styles.hoverEffects.userNameHover.backgroundColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = styles.userName.backgroundColor;
                  }}
                >
                  <User size={18} />
                  <span className="user-name-text">Hi, {userName}</span>
                </Link>

                <button 
                  style={styles.logoutBtn}
                  className="logout-btn"
                  onClick={logout}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = styles.hoverEffects.logoutBtnHover.backgroundColor;
                    e.currentTarget.style.color = styles.hoverEffects.logoutBtnHover.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = styles.logoutBtn.color;
                  }}
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      {mobileMenuOpen && (
        <div style={styles.mobileNavOverlay} onClick={() => setMobileMenuOpen(false)}>
          <div style={styles.mobileNav} className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <div style={styles.mobileNavHeader}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image
                  src="/assets/images/booklogo.webp"
                  alt="BookStore"
                  width={32}
                  height={32}
                  style={{ borderRadius: "6px" }}
                />
                <h3 style={{ margin: 0, color: "#333", fontSize: "18px", fontWeight: 600 }}>BookStore</h3>
              </div>
              <button 
                style={styles.mobileCloseBtn}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div style={styles.mobileNavMenu}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    ...styles.mobileNavLink,
                    ...(pathname === item.path ? styles.activeMobileNavLink : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== item.path) {
                      e.currentTarget.style.backgroundColor = styles.hoverEffects.mobileNavLinkHover.backgroundColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== item.path) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <span style={styles.mobileNavIcon}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}

              {/* MOBILE CART */}
              <Link 
                href="/cart" 
                style={styles.mobileCartLink}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(153, 187, 207, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <ShoppingCart size={20} />
                <span>Cart ({cartCount})</span>
              </Link>
            </div>

            {/* MOBILE LOGIN / LOGOUT */}
            <div style={styles.mobileAuthSection}>
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setOpenLogin(true);
                    setMobileMenuOpen(false);
                  }}
                  style={styles.mobileLoginBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = styles.hoverEffects.mobileLoginBtnHover.transform;
                    e.currentTarget.style.boxShadow = styles.hoverEffects.mobileLoginBtnHover.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <User size={20} />
                  Login / Signup
                </button>
              ) : (
                <div style={styles.mobileUserInfo}>
                  <div style={styles.mobileUserGreeting}>
                    <User size={20} />
                    <span>Hello, {userName}</span>
                  </div>
                  <button 
                    style={styles.mobileLogoutBtn}
                    onClick={logout}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = styles.hoverEffects.mobileLogoutBtnHover.backgroundColor;
                      e.currentTarget.style.color = styles.hoverEffects.mobileLogoutBtnHover.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = styles.mobileLogoutBtn.color;
                    }}
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {openLogin && (
        <Login
          close={() => setOpenLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Responsive Media Queries - MOBILE ONLY */}
      <style jsx global>{`
        /* Tablet and below - Show hamburger, hide desktop nav */
        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 24px !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          /* Show hamburger menu button */
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          
          /* Hide desktop navigation */
          .desktop-nav {
            display: none !important;
          }
          
          /* Adjust header container padding */
          header > div {
            padding: 0 16px !important;
          }
          
          /* Reduce right icons gap */
          .right-icons {
            gap: 12px !important;
          }
          
          /* Hide login button text on mobile */
          .login-btn .login-text {
            display: none;
          }
          
          /* Adjust login button padding */
          .login-btn {
            padding: 10px !important;
            min-width: auto !important;
          }
          
          /* Hide username text on mobile */
          .user-name .user-name-text {
            display: none;
          }
          
          /* Adjust username link padding */
          .user-name {
            padding: 8px !important;
            min-width: auto !important;
          }
          
          /* Reduce logo text size */
          .logo-text {
            font-size: 20px !important;
          }
          
          /* Adjust cart and search icon sizes */
          .cart-icon,
          .search-btn {
            padding: 6px !important;
          }
          
          /* Mobile navigation slide-in animation */
          .mobile-nav {
            animation: slideIn 0.3s ease-out;
          }
          
          @keyframes slideIn {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          /* Prevent body scroll when mobile menu is open */
          body:has(.mobile-nav) {
            overflow: hidden;
          }
        }
        
        /* Extra small mobile devices */
        @media (max-width: 480px) {
          /* Reduce header height */
          header > div {
            height: 64px !important;
            padding: 0 12px !important;
          }
          
          /* Further reduce logo text size */
          .logo-text {
            font-size: 18px !important;
          }
          
          /* Reduce right icons gap even more */
          .right-icons {
            gap: 8px !important;
          }
          
          /* Smaller mobile menu width */
          .mobile-nav {
            width: 280px !important;
            max-width: 85vw !important;
          }
          
          /* Adjust logout button on mobile */
          .logout-btn {
            padding: 6px !important;
          }
        }
        
        /* Very small devices */
        @media (max-width: 360px) {
          .logo-text {
            font-size: 16px !important;
          }
          
          .mobile-nav {
            width: 260px !important;
          }
        }
      `}</style>
    </>
  );
}