#!/bin/bash

echo "Generating do-admin-backend modules, controllers, and services..."

# Controllers for do-admin-backend
echo "Generating auth controller..."
nx g @nx/nest:controller --path apps/do-admin/backend/src/app/auth --skipFormat

echo "Generating users controller..."
nx g @nx/nest:controller --path apps/do-admin/backend/src/app/users --skipFormat

echo "Generating roles controller..."
nx g @nx/nest:controller --path apps/do-admin/backend/src/app/roles --skipFormat

# Services for do-admin-backend
echo "Generating auth service..."
nx g @nx/nest:service --path apps/do-admin/backend/src/app/auth --skipFormat

echo "Generating users service..."
nx g @nx/nest:service --path apps/do-admin/backend/src/app/users --skipFormat

echo "Generating roles service..."
nx g @nx/nest:service --path apps/do-admin/backend/src/app/roles --skipFormat

echo "Generating cinema backend modules..."
# do-cinema-backend modules
for domain in movies showtimes bookings seats; do
  echo "Creating $domain module..."
  mkdir -p apps/do-cinema/backend/src/app/$domain
  nx g @nx/nest:module --path apps/do-cinema/backend/src/app/$domain --skipFormat
done

echo "Generating sport backend modules..."
# do-sport-backend modules
for domain in courts schedules bookings coaches; do
  echo "Creating $domain module..."
  mkdir -p apps/do-sport/backend/src/app/$domain
  nx g @nx/nest:module --path apps/do-sport/backend/src/app/$domain --skipFormat
done

echo "Generating hospital backend modules..."
# do-hospital-backend modules
for domain in doctors patients appointments; do
  echo "Creating $domain module..."
  mkdir -p apps/do-hospital/backend/src/app/$domain
  nx g @nx/nest:module --path apps/do-hospital/backend/src/app/$domain --skipFormat
done

echo "Done!"
