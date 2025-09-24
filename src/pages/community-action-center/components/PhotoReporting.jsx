import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PhotoReporting = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [reportData, setReportData] = useState({
    photos: [],
    category: '',
    title: '',
    description: '',
    location: '',
    urgency: 'medium',
    anonymous: false
  });
  const [isCapturing, setIsCapturing] = useState(false);
  const fileInputRef = useRef(null);

  const categoryOptions = [
    { value: 'overflowing-bins', label: 'Overflowing Garbage Bins' },
    { value: 'illegal-dumping', label: 'Illegal Dumping' },
    { value: 'broken-infrastructure', label: 'Broken Waste Infrastructure' },
    { value: 'unsegregated-waste', label: 'Unsegregated Waste' },
    { value: 'littering', label: 'Public Littering' },
    { value: 'blocked-drains', label: 'Blocked Drains' },
    { value: 'other', label: 'Other Issue' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low Priority', description: 'Can wait a few days' },
    { value: 'medium', label: 'Medium Priority', description: 'Should be addressed soon' },
    { value: 'high', label: 'High Priority', description: 'Needs immediate attention' }
  ];

  const handlePhotoCapture = () => {
    setIsCapturing(true);
    // Simulate camera capture with mock photos
    setTimeout(() => {
      const mockPhoto = {
        id: Date.now(),
        url: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: 'Koramangala 5th Block, Bangalore',
        timestamp: new Date()?.toISOString()
      };
      setReportData(prev => ({
        ...prev,
        photos: [...prev?.photos, mockPhoto],
        location: mockPhoto?.location
      }));
      setIsCapturing(false);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event?.target?.files);
    files?.forEach((file, index) => {
      const mockPhoto = {
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        location: 'Current Location',
        timestamp: new Date()?.toISOString()
      };
      setReportData(prev => ({
        ...prev,
        photos: [...prev?.photos, mockPhoto]
      }));
    });
  };

  const removePhoto = (photoId) => {
    setReportData(prev => ({
      ...prev,
      photos: prev?.photos?.filter(photo => photo?.id !== photoId)
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    onSubmit(reportData);
    setReportData({
      photos: [],
      category: '',
      title: '',
      description: '',
      location: '',
      urgency: 'medium',
      anonymous: false
    });
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-elevation-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Report an Issue</h2>
            <p className="text-sm text-muted-foreground">Help improve your community</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} iconName="X" iconSize={20} />
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-4">
            {[1, 2, 3]?.map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-1 mx-2 rounded ${
                    step > stepNumber ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Step {step} of 3: {
              step === 1 ? 'Capture Photos' :
              step === 2 ? 'Describe Issue': 'Review & Submit'
            }
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Take or Upload Photos</h3>
                <p className="text-muted-foreground mb-6">Clear photos help authorities understand and resolve issues faster</p>
              </div>

              {/* Photo Capture Options */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handlePhotoCapture}
                  disabled={isCapturing}
                  iconName="Camera"
                  iconPosition="left"
                  iconSize={20}
                  className="h-20"
                >
                  {isCapturing ? 'Capturing...' : 'Take Photo'}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => fileInputRef?.current?.click()}
                  iconName="Upload"
                  iconPosition="left"
                  iconSize={20}
                  className="h-20"
                >
                  Upload Photos
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />

              {/* Photo Preview */}
              {reportData?.photos?.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Captured Photos ({reportData?.photos?.length})</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {reportData?.photos?.map((photo) => (
                      <div key={photo?.id} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={photo?.url}
                            alt="Report photo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => removePhoto(photo?.id)}
                          className="absolute top-2 right-2 w-6 h-6 bg-error text-error-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Icon name="X" size={12} />
                        </button>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={10} />
                            <span className="truncate">{photo?.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capture Tips */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                  Photo Tips
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Take multiple angles of the issue</li>
                  <li>• Include nearby landmarks for context</li>
                  <li>• Ensure good lighting and clear focus</li>
                  <li>• Photos are automatically geo-tagged</li>
                </ul>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Describe the Issue</h3>
                <p className="text-muted-foreground">Provide details to help authorities take appropriate action</p>
              </div>

              <Select
                label="Issue Category"
                options={categoryOptions}
                value={reportData?.category}
                onChange={(value) => setReportData(prev => ({ ...prev, category: value }))}
                required
              />

              <Input
                label="Issue Title"
                type="text"
                placeholder="Brief summary of the issue"
                value={reportData?.title}
                onChange={(e) => setReportData(prev => ({ ...prev, title: e?.target?.value }))}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Detailed Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Describe the issue in detail, including when you first noticed it and any relevant context..."
                  value={reportData?.description}
                  onChange={(e) => setReportData(prev => ({ ...prev, description: e?.target?.value }))}
                />
              </div>

              <Select
                label="Priority Level"
                options={urgencyOptions}
                value={reportData?.urgency}
                onChange={(value) => setReportData(prev => ({ ...prev, urgency: value }))}
              />

              <Input
                label="Specific Location"
                type="text"
                placeholder="Add more specific location details if needed"
                value={reportData?.location}
                onChange={(e) => setReportData(prev => ({ ...prev, location: e?.target?.value }))}
                description="Auto-detected from photo location"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Review Your Report</h3>
                <p className="text-muted-foreground">Please review all details before submitting</p>
              </div>

              {/* Summary Card */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    {reportData?.photos?.[0] && (
                      <Image
                        src={reportData?.photos?.[0]?.url}
                        alt="Report preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{reportData?.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{reportData?.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {categoryOptions?.find(opt => opt?.value === reportData?.category)?.label}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Priority:</span>
                    <span className={`ml-2 font-medium ${
                      reportData?.urgency === 'high' ? 'text-error' :
                      reportData?.urgency === 'medium' ? 'text-warning' : 'text-success'
                    }`}>
                      {reportData?.urgency?.charAt(0)?.toUpperCase() + reportData?.urgency?.slice(1)}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="ml-2 font-medium text-foreground">{reportData?.location}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Photos:</span>
                    <span className="ml-2 font-medium text-foreground">{reportData?.photos?.length} attached</span>
                  </div>
                </div>
              </div>

              {/* Privacy Options */}
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={reportData?.anonymous}
                    onChange={(e) => setReportData(prev => ({ ...prev, anonymous: e?.target?.checked }))}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-ring"
                  />
                  <label htmlFor="anonymous" className="text-sm font-medium text-foreground">
                    Submit anonymously
                  </label>
                </div>
                <p className="text-xs text-muted-foreground mt-2 ml-7">
                  Your identity will not be shared with authorities or other users
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex space-x-3">
            {step > 1 && (
              <Button variant="outline" onClick={handlePrevious} iconName="ChevronLeft" iconSize={16}>
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex space-x-3">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            {step < 3 ? (
              <Button
                variant="default"
                onClick={handleNext}
                disabled={
                  (step === 1 && reportData?.photos?.length === 0) ||
                  (step === 2 && (!reportData?.category || !reportData?.title))
                }
                iconName="ChevronRight"
                iconPosition="right"
                iconSize={16}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleSubmit}
                iconName="Send"
                iconPosition="right"
                iconSize={16}
              >
                Submit Report
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoReporting;