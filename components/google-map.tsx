"use client";

import { useState } from "react";

export default function GoogleMap({
  className = "",
  height = 420,
}: {
  className?: string;
  height?: number;
}) {
  const [copied, setCopied] = useState(false);

  const address =
    "Survey No. 733, ORR Rd, Near Sundara Chaitanya Ashram, Dundigal, Hyderabad, Telangana 500043";

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  const fullMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  function handleCopy() {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className={`google-map-container ${className}`}>
      <div className="google-map-header">
        <div className="google-map-header-left">
          <span className="map-pin-badge" aria-hidden="true">
            📍
          </span>
          <div>
            <h3>Skyhigh Engineering — Factory &amp; Works</h3>
            <p>{address}</p>
          </div>
        </div>
        <div className="google-map-header-actions">
          <button
            type="button"
            onClick={handleCopy}
            className="map-action-btn"
            title="Copy address to clipboard"
          >
            {copied ? "✓ Address Copied!" : "📋 Copy Address"}
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-action-btn map-action-primary"
          >
            Get Directions →
          </a>
          <a
            href={fullMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-action-btn"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>

      <div className="google-map-frame-wrapper" style={{ height: `${height}px` }}>
        <iframe
          src={mapEmbedUrl}
          title="Google Map with pin pointing to Skyhigh Engineering Factory in Dundigal, Hyderabad"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
