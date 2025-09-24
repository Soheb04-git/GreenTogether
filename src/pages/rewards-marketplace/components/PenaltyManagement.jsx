import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PenaltyManagement = ({ penalties, onPayPenalty, onAppealPenalty }) => {
  const [selectedPenalty, setSelectedPenalty] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-warning bg-warning/10';
      case 'paid': return 'text-success bg-success/10';
      case 'appealed': return 'text-trust-blue bg-trust-blue/10';
      case 'overdue': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const totalPending = penalties?.filter(p => p?.status === 'pending' || p?.status === 'overdue')?.reduce((sum, p) => sum + p?.amount, 0);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Penalty Management</h2>
        {totalPending > 0 && (
          <div className="flex items-center space-x-2 text-error">
            <Icon name="AlertTriangle" size={16} />
            <span className="font-semibold">₹{totalPending} pending</span>
          </div>
        )}
      </div>
      {penalties?.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-2">No Penalties!</h3>
          <p className="text-muted-foreground">Keep up the excellent waste management practices.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {penalties?.map((penalty) => (
            <div key={penalty?.id} className="border border-border rounded-lg p-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{penalty?.violation}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(penalty?.status)}`}>
                      {penalty?.status?.charAt(0)?.toUpperCase() + penalty?.status?.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      <span>Issued: {penalty?.issuedDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-2" />
                      <span>{penalty?.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="IndianRupee" size={14} className="mr-2" />
                      <span className="font-semibold text-foreground">₹{penalty?.amount}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-2" />
                      <span>Due: {penalty?.dueDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{penalty?.description}</p>
                  
                  {penalty?.evidence && (
                    <div className="mb-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedPenalty(penalty)}
                        iconName="Eye"
                        iconPosition="left"
                        iconSize={14}
                        className="text-xs"
                      >
                        View Evidence
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
                  {penalty?.status === 'pending' && (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => onPayPenalty(penalty)}
                        iconName="CreditCard"
                        iconPosition="left"
                        iconSize={14}
                      >
                        Pay ₹{penalty?.amount}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onAppealPenalty(penalty)}
                        iconName="MessageSquare"
                        iconPosition="left"
                        iconSize={14}
                      >
                        Appeal
                      </Button>
                    </>
                  )}
                  
                  {penalty?.status === 'overdue' && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onPayPenalty(penalty)}
                      iconName="AlertTriangle"
                      iconPosition="left"
                      iconSize={14}
                    >
                      Pay Now (Overdue)
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Evidence Modal */}
      {selectedPenalty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Penalty Evidence</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPenalty(null)}
                  iconName="X"
                  iconSize={16}
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">{selectedPenalty?.violation}</h4>
                  <p className="text-sm text-muted-foreground">{selectedPenalty?.description}</p>
                </div>
                
                {selectedPenalty?.evidence && (
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Photographic Evidence</h5>
                    <Image
                      src={selectedPenalty?.evidence}
                      alt="Penalty evidence"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium text-foreground">{selectedPenalty?.location}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date & Time:</span>
                    <p className="font-medium text-foreground">{selectedPenalty?.issuedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PenaltyManagement;