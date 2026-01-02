
"use client";

import React, { useEffect, useState } from "react";

interface OrderItem {
  bookId: string;
  bookName: string;
  authorName: string;
  salePrice: number;
  mrpPrice: number;
  image1: string;
  quantity: number;
}

interface BillingAddress {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface PaymentDetails {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amount: number;
  currency: string;
  status: string;
  paymentMethod: string;
}

interface PriceDetails {
  subtotal: number;
  gst: number;
  shipping: number;
  total: number;
}

interface Order {
  _id: string;
  orderId: string;
  items: OrderItem[];
  billingAddress: BillingAddress;
  paymentDetails: PaymentDetails;
  priceDetails: PriceDetails;
  orderStatus: string;
  createdAt: string | { $date: string };
  updatedAt: string | { $date: string };
}

export default function ProfilePage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // First, let's test with the all orders endpoint
        console.log("Fetching all orders...");
        
        // Method 1: Try to get all orders first (temporary)
        const response = await fetch('/api/orders/all');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Orders fetched:", data);
        setOrders(data);
        
        
      } catch (err: any) {
        console.error("Error fetching orders:", err);
        setError(err.message || "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Helper function to format date
  const formatDate = (dateInput: string | { $date: string }): string => {
    let dateString: string;
    
    if (typeof dateInput === 'object' && dateInput.$date) {
      dateString = dateInput.$date;
    } else {
      dateString = dateInput as string;
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Helper function to get status color
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return '#10b981';
      case 'processing':
        return '#f59e0b';
      case 'shipped':
        return '#3b82f6';
      case 'delivered':
        return '#8b5cf6';
      case 'cancelled':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: 20
      }}>
        <div style={{
          width: 50,
          height: 50,
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ color: '#6b7280' }}>Loading orders...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 30, maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ marginBottom: 20 }}>My Orders</h2>
        <div style={{ 
          padding: 40, 
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <p style={{ color: '#dc2626', marginBottom: 10 }}>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 30, maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ marginBottom: 30 }}>My Orders</h2>
      <div style={{ marginBottom: 20, padding: '10px 15px', backgroundColor: '#f0f9ff', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 14, color: '#0369a1' }}>
          ⓘ Showing all orders from database. {orders.length} order(s) found.
        </p>
      </div>

      {orders.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: 40, 
          border: '1px dashed #ddd',
          borderRadius: 8
        }}>
          <p>No orders found in database</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {orders.map(order => (
            <div
              key={order._id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 24,
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Order Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: 16,
                borderBottom: '1px solid #f3f4f6',
                paddingBottom: 16
              }}>
                <div>
                  <h4 style={{ margin: 0, marginBottom: 8 }}>Order #{order.orderId}</h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: 14 }}>
                    Placed on {formatDate(order.createdAt)}
                  </p>
                </div>
                <div style={{ 
                  padding: '6px 12px', 
                  backgroundColor: getStatusColor(order.orderStatus) + '15',
                  color: getStatusColor(order.orderStatus),
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 500
                }}>
                  {order.orderStatus.toUpperCase()}
                </div>
              </div>

              {/* Order Items */}
              <div style={{ marginBottom: 24 }}>
                <h5 style={{ marginBottom: 12, fontSize: 16 }}>Items</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      style={{ 
                        display: "flex", 
                        gap: 16, 
                        padding: 12,
                        backgroundColor: '#f9fafb',
                        borderRadius: 8
                      }}
                    >
                      <img
                        src={item.image1 || '/placeholder-book.jpg'}
                        alt={item.bookName}
                        width={80}
                        height={100}
                        style={{ 
                          objectFit: "cover", 
                          borderRadius: 6,
                          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder-book.jpg';
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, marginBottom: 4, fontWeight: 600 }}>
                          {item.bookName || 'Unknown Book'}
                        </p>
                        <p style={{ margin: 0, marginBottom: 4, color: '#6b7280', fontSize: 14 }}>
                          by {item.authorName || 'Unknown Author'}
                        </p>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
                          <span style={{ fontWeight: 600, color: '#111827' }}>
                            ₹{(item.salePrice / 100).toFixed(2)}
                          </span>
                          {item.mrpPrice > item.salePrice && (
                            <span style={{ 
                              textDecoration: 'line-through', 
                              color: '#9ca3af',
                              fontSize: 14
                            }}>
                              ₹{(item.mrpPrice / 100).toFixed(2)}
                            </span>
                          )}
                          <span style={{ marginLeft: 'auto', color: '#4b5563' }}>
                            Qty: {item.quantity || 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Details */}
              <div style={{ 
                backgroundColor: '#f8fafc', 
                padding: 16, 
                borderRadius: 8,
                marginBottom: 24 
              }}>
                <h5 style={{ marginBottom: 12, fontSize: 16 }}>Price Details</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal</span>
                    <span>₹{((order.priceDetails?.subtotal || 0) / 100).toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>GST (18%)</span>
                    <span>₹{((order.priceDetails?.gst || 0) / 100).toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Shipping</span>
                    <span>₹{((order.priceDetails?.shipping || 0) / 100).toFixed(2)}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: 12,
                    marginTop: 4,
                    fontWeight: 600,
                    fontSize: 16
                  }}>
                    <span>Total Amount</span>
                    <span>₹{((order.priceDetails?.total || 0) / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping and Payment Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Shipping Address */}
                {order.billingAddress && (
                  <div>
                    <h5 style={{ marginBottom: 8, fontSize: 16 }}>Shipping Address</h5>
                    <div style={{ 
                      backgroundColor: '#f8fafc', 
                      padding: 16, 
                      borderRadius: 8,
                      fontSize: 14 
                    }}>
                      <p style={{ margin: 0, fontWeight: 600, marginBottom: 4 }}>
                        {order.billingAddress.name || 'N/A'}
                      </p>
                      <p style={{ margin: 0, marginBottom: 4 }}>
                        {order.billingAddress.address || 'N/A'}
                      </p>
                      <p style={{ margin: 0, marginBottom: 4 }}>
                        {order.billingAddress.city || ''}, {order.billingAddress.state || ''} - {order.billingAddress.pincode || ''}
                      </p>
                      <p style={{ margin: 0, marginBottom: 4 }}>
                        📞 {order.billingAddress.phone || 'N/A'}
                      </p>
                      <p style={{ margin: 0 }}>
                        ✉️ {order.billingAddress.email || 'N/A'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Payment Info */}
                {order.paymentDetails && (
                  <div>
                    <h5 style={{ marginBottom: 8, fontSize: 16 }}>Payment Information</h5>
                    <div style={{ 
                      backgroundColor: '#f8fafc', 
                      padding: 16, 
                      borderRadius: 8,
                      fontSize: 14 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span>Payment ID:</span>
                        <span style={{ fontFamily: 'monospace', fontSize: 12 }}>
                          {order.paymentDetails.razorpayPaymentId?.substring(0, 12) || 'N/A'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span>Status:</span>
                        <span style={{ 
                          color: order.paymentDetails.status === 'completed' ? '#10b981' : '#f59e0b',
                          fontWeight: 500
                        }}>
                          {order.paymentDetails.status?.toUpperCase() || 'PENDING'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span>Method:</span>
                        <span style={{ textTransform: 'capitalize' }}>
                          {order.paymentDetails.paymentMethod || 'razorpay'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Amount Paid:</span>
                        <span style={{ fontWeight: 600 }}>
                          ₹{((order.paymentDetails.amount || 0) / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}