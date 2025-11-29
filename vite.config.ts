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
        // Use a more conservative chunking strategy to avoid circular dependencies
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Strategy: Only split truly independent, heavy libraries
            // Keep interdependent packages together to avoid initialization issues
            
            // 1. React ecosystem - keep ALL React dependencies together
            // This includes React, React DOM, React Router, and ALL React-dependent packages
            if (
              id.includes('react') || 
              id.includes('react-dom') || 
              id.includes('react-router') ||
              id.includes('@radix-ui') ||
              id.includes('sonner') ||
              id.includes('@tanstack/react-query') ||
              id.includes('react-helmet-async') ||
              id.includes('next-themes') ||
              id.includes('react-hook-form') ||
              id.includes('@hookform') ||
              id.includes('react-day-picker') ||
              id.includes('react-parallax-tilt') ||
              id.includes('react-resizable-panels') ||
              id.includes('react-awesome-reveal') ||
              id.includes('framer-motion') ||
              id.includes('embla-carousel-react') ||
              id.includes('recharts') ||
              id.includes('lucide-react') ||
              id.includes('react-icons') ||
              id.includes('clsx') ||
              id.includes('class-variance-authority') ||
              id.includes('tailwind-merge') ||
              id.includes('tailwindcss-animate') ||
              id.includes('cmdk') ||
              id.includes('input-otp') ||
              id.includes('vaul') ||
              id.includes('zod') ||
              id.includes('date-fns')
            ) {
              return 'react-vendor';
            }
            
            // 2. GSAP (standalone, heavy animation library)
            if (id.includes('gsap')) {
              return 'gsap-vendor';
            }
            
            // 3. LightGallery (heavy, only used in ProjectDetail, lazy loaded)
            if (id.includes('lightgallery') || id.includes('lg-')) {
              return 'gallery-vendor';
            }
            
            // 4. PrimeReact (heavy, only used in ProjectDetail, lazy loaded)
            if (id.includes('primereact')) {
              return 'primereact-vendor';
            }
            
            // 5. Bootstrap ecosystem (independent)
            if (id.includes('bootstrap')) {
              return 'bootstrap-vendor';
            }
            
            // 6. Swiper (independent carousel library)
            if (id.includes('swiper')) {
              return 'swiper-vendor';
            }
            
            // 7. All other packages stay together to avoid circular dependencies
            // This includes axios, @emotion/react, remixicon, and other utilities
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
