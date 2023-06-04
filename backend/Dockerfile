# A Dockerfile for a django container with a postgres database
FROM python:3.8-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

EXPOSE 8000

# Set working directory
WORKDIR /app/backend

# Install dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    musl-dev \
    postgresql \
    postgresql-contrib \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt


# Copy project
COPY . .

# Start Development Server
CMD ["python", "manage.py", "runserver", "8000"]






