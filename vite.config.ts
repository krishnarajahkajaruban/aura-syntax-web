import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 5173,
  },
  build: {
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit to 600KB (gzipped is much smaller)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor chunks for better caching
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // GSAP and animations
            if (id.includes('gsap') || id.includes('framer-motion') || id.includes('react-awesome-reveal')) {
              return 'animation-vendor';
            }
            // LightGallery (heavy, only used in ProjectDetail)
            if (id.includes('lightgallery') || id.includes('lg-')) {
              return 'gallery-vendor';
            }
            // PrimeReact (heavy, only used in ProjectDetail)
            if (id.includes('primereact')) {
              return 'primereact-vendor';
            }
            // UI libraries - keep all together to avoid circular dependencies
            // sonner depends on @radix-ui, so keep them together
            // Only split lucide-react separately as it's standalone
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            // Keep @radix-ui and sonner in vendor chunk to avoid circular deps
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
              return 'form-vendor';
            }
            // Other vendors
            if (id.includes('swiper') || id.includes('bootstrap') || id.includes('axios')) {
              return 'misc-vendor';
            }
            // All other node_modules
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: false, // Disable PWA in development to avoid service worker errors
      },
      manifest: {
        name: "AuraSyntax",
        short_name: "AuraSyntax",
        description: "AuraSyntax — Craft the Logic. Build What's Next.",
        theme_color: "#292f61",
        background_color: "#292f61",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        scope: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          }
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "script" || request.destination === "style",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "asset-cache",
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
