# PKS DPC Dramaga Landing Page - Contracts & Integration Guide

## Current Status
**Frontend**: ✅ Complete with mock data
**Backend**: ⏸️ Not implemented yet (frontend only as per requirement)

## Mock Data Location
All data is currently stored in `/app/frontend/src/data/mockData.js`

## Future Backend Integration Plan

### 1. Contact Form Submission
**Endpoint**: `POST /api/contacts`
**Current**: Form validates and shows toast notification (frontend only)
**Future**: Should save contact messages to MongoDB

**Schema**:
```javascript
{
  nama: String (required),
  email: String (required, email format),
  pesan: String (required, min 10 chars),
  createdAt: Date
}
```

### 2. News/Berita Management (Optional)
**Endpoints**: 
- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get single news
- `POST /api/news` - Create news (admin)
- `PUT /api/news/:id` - Update news (admin)
- `DELETE /api/news/:id` - Delete news (admin)

**Schema**:
```javascript
{
  title: String,
  excerpt: String,
  image: String (URL),
  date: String,
  category: String,
  content: String (full article)
}
```

### 3. Gallery Management (Optional)
**Endpoints**:
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Add gallery item (admin)

**Schema**:
```javascript
{
  image: String (URL),
  caption: String
}
```

### 4. Integration Steps (when needed):
1. Remove mock data imports from components
2. Create API service file (`/app/frontend/src/services/api.js`)
3. Implement backend endpoints in `/app/backend/server.py`
4. Update components to fetch from API instead of mock data
5. Add loading states and error handling
6. Implement admin authentication for CMS features

## Notes
- Current implementation is frontend-only with mock data as per user requirement
- Contact form has full validation but does not persist data
- All interactive features (navigation, gallery lightbox, form validation, mobile menu) are fully functional
- Website is responsive and optimized for mobile, tablet, and desktop
