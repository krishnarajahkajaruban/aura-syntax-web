import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Dialog } from 'primereact/dialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projects } from '../data/mockData';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || '0'));
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <Link to="/" className={styles.backLink}>
          <i className="bi-arrow-left"></i> Back to Home
        </Link>
      </div>
    );
  }

  const openGallery = (index: number) => {
    setSelectedImage(index);
    setShowGallery(true);
  };

  return (
    <div className={styles.projectDetail}>
      <div className={styles.detailContainer}>
        <Fade direction="up" triggerOnce>
          <Link to="/" className={styles.backLink}>
            <i className="bi-arrow-left"></i> Back to Home
          </Link>

          <div className={styles.projectHeader}>
            <img src={project.image} alt={project.name} className={styles.heroImage} />
            <div className={styles.headerOverlay}>
              <span className={styles.projectType}>{project.projectType}</span>
              <h1 className={styles.projectName}>{project.name}</h1>
              {project.hasPreview && (
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewButton}
                >
                  <i className="bi-box-arrow-up-right"></i> Live Preview
                </a>
              )}
            </div>
          </div>

          <div className={styles.projectContent}>
            <section className={styles.descriptionSection}>
              <h2>About This Project</h2>
              <div className={styles.descriptions}>
                {project.projectDescriptions.map((desc) => (
                  <p key={desc.id}>{desc.description}</p>
                ))}
              </div>
            </section>

            {project.projectSnapShots.length > 0 && (
              <section className={styles.snapshotsSection}>
                <h2>Project Snapshots</h2>
                <div className={styles.snapshotsGrid}>
                  {project.projectSnapShots.map((snapshot, index) => (
                    <div
                      key={snapshot.id}
                      className={styles.snapshotCard}
                      onClick={() => openGallery(index)}
                    >
                      <img src={snapshot.imagePath} alt={`${project.name} snapshot ${index + 1}`} />
                      <div className={styles.snapshotOverlay}>
                        <i className="bi-zoom-in"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className={styles.ctaSection}>
              <h2>Interested in Similar Projects?</h2>
              <p>Let's discuss how we can create something amazing for you.</p>
              <a href="/#contact" className={styles.ctaButton}>
                Start Your Project <i className="bi-arrow-right"></i>
              </a>
            </section>
          </div>
        </Fade>
      </div>

      <Dialog
        visible={showGallery}
        onHide={() => setShowGallery(false)}
        className={styles.galleryDialog}
        modal
        maximizable
        draggable={false}
        resizable={false}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          initialSlide={selectedImage}
          className={styles.gallerySwiper}
        >
          {project.projectSnapShots.map((snapshot) => (
            <SwiperSlide key={snapshot.id}>
              <img src={snapshot.imagePath} alt={project.name} className={styles.galleryImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
