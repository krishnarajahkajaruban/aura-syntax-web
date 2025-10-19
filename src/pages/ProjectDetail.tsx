/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/mockData';
import 'primereact/resources/themes/lara-dark-cyan/theme.css';
import '../styles/custom.css';
import BackToTop from '@/components/BackToTop';

import LightGallery from "lightgallery/react";

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


gsap.registerPlugin(ScrollToPlugin);

const ProjectDetail = () => {
  const { id } = useParams();
  const lightGalleryRef = useRef<any>(null);
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0,
      ease: 'power2.out'
    });
  }, []);

  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ minHeight: '100vh', paddingTop: '150px' }}>
          <div className="text-center">
            <h1>Project Not Found</h1>
            <button className="btn-primary-aura mt-4" onClick={() => navigate('/')}>
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Navbar />

      <section className="section project-detail-section">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <div className="row align-items-center project-detail-container mb-sm-5">
              <div className="col-xl-6">
                <div className="project-detail-area">
                  <div className="project-detail-header">
                    {project.companyLogo && (
                      <div className="project-logo">
                        <img
                          src={project.companyLogo}
                          alt={`${project.name} logo`}
                          draggable={false}
                        />
                      </div>
                    )}

                    <div className="project-detail-sub">
                      <h1 className="gradient-text project-detail-head">{project.name}</h1>

                      <span
                        className="badge">
                        {project.projectType}
                      </span>
                    </div>
                  </div>

                  {project.hasPreview && (
                    <button
                      className="btn-primary-aura"
                      onClick={() => window.open(project.previewLink, '_blank')}
                    >
                      View Live Preview
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  )}
                </div>
              </div>

              <div className="col-xl-6 col-lg-8 ms-auto">
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-fluid project-detail-main-img"
                  draggable={false}
                />
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div className="glass-card project-details-card mb-5">
              <h3 className="mb-4">Project Overview</h3>
              {project.projectDescriptions.map((desc, index) => (
                <p key={desc.id}>
                  {desc.description}
                </p>
              ))}
            </div>
          </Fade>

          {project.projectSnapShots.length > 0 && (
            <Fade direction="up" delay={400} triggerOnce>
              <div className="glass-card project-details-card">
                <h3 className="mb-4">Project Gallery</h3>

                <LightGallery
                  onInit={(ref) => (lightGalleryRef.current = ref.instance)}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="masonry-gallery"
                  mode="lg-fade"
                >
                  {project.projectSnapShots.map((snapshot, index) => (
                    <a
                      key={snapshot.id}
                      href={snapshot.imagePath}
                      data-sub-html={`${project.name} — Image ${index + 1}`}
                      className={`masonry-item masonry-item-${(index % 3) + 1} image-gallery-item`}
                    >
                      <img
                        src={snapshot.imagePath}
                        alt={`${project.name} snapshot`}
                        className="img-fluid rounded"
                        style={{
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                          borderRadius: "1rem",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        draggable={false}
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
            </Fade>
          )}

          <Fade direction="up" delay={600} triggerOnce>
            <div className="text-center mt-5">
              <button className="btn-outline-aura" onClick={() => navigate('/')}>
                <i className="bi bi-arrow-left me-2"></i>
                Back to Projects
              </button>
            </div>
          </Fade>
        </div>
      </section>

      <BackToTop />

      <Footer />
    </React.Fragment>
  );
};

export default ProjectDetail;
